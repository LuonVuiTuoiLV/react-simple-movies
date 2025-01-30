# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Lấy dữ liệu từ Movie DB API
- Sử dụng thư viện react swiper -> làm slider
- Sử dụng swr để fetching dữ liệu
- Sử dụng compiler option trong jsx config -> để việc import component ko bị rối -> tối ưu API config để sử dụng ở nhìu nơi
- Viết một components đơn giản như Button
- Sử dụng routing
- Sử dụng code splitting
  - Sử dụng lazy, suspense components -> chia nhỏ trang thành nhiều phần -> vô trang nào thì load trang đó
