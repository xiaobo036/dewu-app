export interface CardItem {
    id: number,
    imageUrl: string,
    title: string,
    authorInfo: {
        avatarUrl: string,
        name: string,
        likes: number,
    },
    height?: number,
}