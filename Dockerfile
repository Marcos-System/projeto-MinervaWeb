# Base image
FROM nginx:latest

# Copy the Nginx configuration file \Users\silva\Downloads\nginx-1.26.1\nginx-1.26.1\conf\nginx.conf
COPY nginx.conf Users/silva/Downloads/nginx-1.26.1/nginx-1.26.1/conf/nginx.conf

# Copy the static files collected by Django
COPY ./staticfiles /usr/share/nginx/html/static

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
