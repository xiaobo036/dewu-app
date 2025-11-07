import "@/styles/community/content.scss";
import { useEffect, useRef, useState } from "react";
import type { CardItem } from "@/pages/community/types/content";
import { Spin } from "antd";

const Content: React.FC = () => {
  // 原始数据池（实际项目中可替换为API请求数据）
  const [originalData, setOriginalData] = useState<CardItem[]>([]);
  // 渲染用的卡片列表（带布局信息）
  const [cardList, setCardList] = useState<CardItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(24);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const waterFall = useRef<HTMLDivElement>(null);

  // 模拟API请求获取数据（实际项目替换为真实接口）
  const fetchData = async () => {
    // 实际项目中这里会调用API：const res = await api.get('/community/hot');
    // 以下为模拟数据逻辑
    const mockData: CardItem[] = Array.from(
      { length: Math.random() * 100 + 100 },
      (_, i) => ({
        id: i + 1,
        imageUrl: `https://picsum.photos/seed/${i + 100}/600/${400 + Math.floor(Math.random() * 300)}`,
        title: `动态标题 ${i + 1}`,
        authorInfo: {
          avatarUrl: `https://picsum.photos/seed/${i + 200}/100/100`,
          name: `用户${i + 1}`,
          likes: Math.floor(Math.random() * 50000) + 1000,
        },
      })
    );
    setOriginalData(mockData);
    setHasMore(true);
  };

  // 计算卡片布局（基于宽高比）
  const calculateCardLayout = (items: CardItem[]): CardItem[] => {
    const container = waterFall.current;
    if (!container) return [];

    // 计算当前列数和单列宽度（响应式）
    const containerWidth = container.clientWidth;
    const columnCount =
      window.innerWidth >= 1280
        ? 4
        : window.innerWidth >= 1024
          ? 3
          : window.innerWidth >= 768
            ? 2
            : 1;
    const columnGap = 24; // 1.5rem = 24px
    const columnWidth =
      (containerWidth - (columnCount - 1) * columnGap) / columnCount;

    // 为每个卡片计算高度
    return items.map((item) => {
      // 从图片URL提取宽高（实际项目可根据图片元数据获取）
      const sizeMatch = item.imageUrl.match(/\/(\d+)\/(\d+)$/);
      const width = sizeMatch ? parseInt(sizeMatch[1]) : 600;
      const height = sizeMatch ? parseInt(sizeMatch[2]) : 500;
      const aspectRatio = width / height;

      return {
        ...item,
        aspectRatio,
        height: Math.floor(columnWidth / aspectRatio), // 基于列宽计算高度
      };
    });
  };

  // 加载分页数据
  const loadPageData = () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    // 计算当前页数据范围
    const start = (currentPage - 1) * itemPerPage;
    const end = currentPage * itemPerPage;
    const pageData = originalData.slice(start, end);

    // 处理布局并追加数据
    const layoutData = calculateCardLayout(pageData);
    setCardList((prev) => [...prev, ...layoutData]);

    // 判断是否还有更多数据
    setHasMore(end < originalData.length);
    setIsLoading(false);
  };

  // 图片加载完成后修正高度（解决实际比例偏差）
  const handleImageLoad = (
    e: React.SyntheticEvent<HTMLImageElement>,
    cardId: number
  ) => {
    const img = e.currentTarget; // 使用currentTarget而不是target
    if (!img.naturalWidth || !img.naturalHeight) return;

    const container = waterFall.current;
    if (!container) return;

    // 重新计算列宽和高度
    const columnCount =
      window.innerWidth >= 1280
        ? 4
        : window.innerWidth >= 1024
          ? 3
          : window.innerWidth >= 768
            ? 2
            : 1;
    const columnGap = 24;
    const columnWidth =
      (container.clientWidth - (columnCount - 1) * columnGap) / columnCount;
    const correctHeight = Math.floor(
      columnWidth / (img.naturalWidth / img.naturalHeight)
    );

    // 更新单个卡片高度
    setCardList((prev) =>
      prev.map((card) =>
        card.id === cardId ? { ...card, height: correctHeight } : card
      )
    );
  };

  // 实现图片懒加载
  useEffect(() => {
    if (!waterFall.current) return;

    const lazyImages =
      waterFall.current.querySelectorAll<HTMLImageElement>(".lazy-load");
    if (!lazyImages.length) return;

    // 修复 rootMargin 单位问题：必须明确指定 px
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const dataSrc = img.dataset.src;
            if (dataSrc) {
              img.src = dataSrc;
              img.classList.remove("lazy-load");
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: "200px 0px", // 这里补充了 px 单位
        threshold: 0.1,
      }
    );

    lazyImages.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, [cardList]);

  // 监听滚动加载更多
  const handleScroll = () => {
    if (isLoading || !hasMore) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 滚动到距离底部200px时加载更多
    if (scrollTop + windowHeight >= documentHeight - 200) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  // 初始化与数据加载
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 分页变化时加载数据
  useEffect(() => {
    if (originalData.length > 0) {
      loadPageData();
    }
  }, [currentPage, originalData]);

  // 窗口大小变化时重新计算布局
  useEffect(() => {
    const handleResize = () => {
      setCardList((prev) => calculateCardLayout(prev));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      <p className="title">热门动态</p>
      <div className="content">
        <div className="masonry-grid" ref={waterFall}>
          {cardList.map((card) => (
            <div key={card.id} className="card-item masonry-item">
              <div className="relative group">
                {/* 懒加载图片：用data-src存储真实地址 */}
                <img
                  data-src={card.imageUrl}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' %3E%3C/svg%3E"
                  alt={card.title}
                  className="w-full lazy-load bg-gray-100"
                  style={{ height: `${card.height}px`, objectFit: "cover" }}
                  onLoad={(e) => handleImageLoad(e, card.id)}
                />
                <div className="card-footer">
                  <div className="card-title">{card.title}</div>
                  <div className="card-author">
                    <div className="author-details">
                      <img
                        src={card.authorInfo.avatarUrl}
                        alt={card.authorInfo.name}
                        className="author-avatar"
                      />
                      <div className="author-name">{card.authorInfo.name}</div>
                    </div>
                    <div className="likes">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                      {card.authorInfo.likes.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 加载状态提示 */}
        {isLoading && <div className="loading"><Spin /></div>}
        {!isLoading && !hasMore && (
          <div className="loading">没有更多内容了</div>
        )}
      </div>
    </div>
  );
};

export default Content;
