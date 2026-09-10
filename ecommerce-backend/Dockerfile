FROM php:8.2-apache

WORKDIR /var/www/html

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl libpq-dev libsqlite3-dev libonig-dev libzip-dev unzip && \
    docker-php-ext-install pdo_mysql pdo_pgsql pdo_sqlite mbstring bcmath zip && \
    rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy project files
COPY . .

# Install PHP dependencies
RUN composer install --no-dev --no-interaction --prefer-dist --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html && \
    chmod -R 775 storage bootstrap/cache

# Configure Apache
RUN a2enmod rewrite
RUN sed -i 's|DocumentRoot /var/www/html|DocumentRoot /var/www/html/public|' /etc/apache2/sites-available/000-default.conf
RUN sed -i '/<Directory \/var\/www\/>/,/<\/Directory>/{s|/var/www/html|/var/www/html/public|;}' /etc/apache2/apache2.conf

# Render supplies PORT at runtime; the entrypoint updates Apache before launch.
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint
RUN chmod +x /usr/local/bin/docker-entrypoint

# Set environment
ENV APP_ENV=production
ENV LOG_CHANNEL=stderr

EXPOSE 10000

ENTRYPOINT ["docker-entrypoint"]
