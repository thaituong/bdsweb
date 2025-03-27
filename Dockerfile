# Sử dụng Node 20 làm image base
FROM node:20 AS build

# Đặt thư mục làm việc
WORKDIR /app

# Copy package.json và package-lock.json (nếu có) vào thư mục làm việc
COPY package.json package-lock.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Copy toàn bộ mã nguồn vào container
COPY . .

# Xây dựng ứng dụng React (dựng build cho production)
RUN npm run build

# Sử dụng một image khác để chạy ứng dụng, sử dụng Nginx để phục vụ các file static
FROM nginx:alpine

# Copy các file build từ container build vào Nginx container
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Chạy Nginx server
CMD ["nginx", "-g", "daemon off;"]
