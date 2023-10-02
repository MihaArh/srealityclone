# Use an official PostgreSQL image as the base image
FROM postgres:latest

# Set environment variables for the PostgreSQL database
ENV POSTGRES_DB postgres
ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD password

# Copy a custom initialization script into the container
COPY ./backend/init.sh /docker-entrypoint-initdb.d/

# Copy the SQL file into the container
COPY ./backend/inserts.sql /docker-entrypoint-initdb.d/


# Grant execute permissions to the script
RUN chmod +x /docker-entrypoint-initdb.d/init.sh
