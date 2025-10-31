import { type ConfigProviderProps } from "antd";

const customTheme: ConfigProviderProps["theme"] = {
  components: {
    Tabs: {
      itemColor: "#000",
      itemActiveColor: "#000",
      itemSelectedColor: "#000",
      inkBarColor: "#000",
      itemHoverColor: "#000",
      titleFontSize: 18,
    },
  },
};

export default customTheme;
