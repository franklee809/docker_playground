# Use the official Ubuntu base image
FROM ubuntu:20.04

# Set environment variables to avoid prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Update package lists and install required packages
RUN apt-get update -y && \
    apt-get install -y \
        autoconf \
        gcc \
        libc6 \
        make \
        wget \
        unzip \
        apache2 \
        apache2-utils \
        php \
        libapache2-mod-php \
        libgd-dev \
        libssl-dev \
        libmcrypt-dev \
        bc \
        gawk \
        dc \
        build-essential \
        snmp \
        libnet-snmp-perl \
        gettext \
        fping \
        iputils-ping \
        qstat \
        dnsutils \
        smbclient

# Download and extract Nagios Core source code
RUN wget -O /tmp/nagios-4.4.9.tar.gz https://github.com/NagiosEnterprises/nagioscore/archive/nagios-4.4.9.tar.gz && \
    tar -C /tmp -zxvf /tmp/nagios-4.4.9.tar.gz && \
    rm /tmp/nagios-4.4.9.tar.gz

# Build and install Nagios Core
WORKDIR /tmp/nagioscore-nagios-4.4.9
RUN ./configure --with-httpd-conf=/etc/apache2/sites-enabled && \
    make all && \
    make install-groups-users && \
    usermod -aG nagios www-data && \
    make install && \
    make install-init && \
    make install-daemoninit && \
    make install-commandmode && \
    make install-config && \
    make install-webconf && \
    a2enmod rewrite cgi

# Download and extract Nagios Plugins source code
RUN wget -O /tmp/nagios-plugins-2.4.2.tar.gz https://github.com/nagios-plugins/nagios-plugins/archive/release-2.4.2.tar.gz && \
    tar -C /tmp -zxvf /tmp/nagios-plugins-2.4.2.tar.gz && \
    rm /tmp/nagios-plugins-2.4.2.tar.gz

# Build and install Nagios Plugins
WORKDIR /tmp/nagios-plugins-release-2.4.2
RUN ./tools/setup && \
    ./configure --with-nagios-user=nagios --with-nagios-group=nagios && \
    make && \
    make install

# Cleanup unnecessary files and directories
RUN rm -rf /tmp/nagioscore-nagios-4.4.9 /tmp/nagios-plugins-release-2.4.2

# Copy the Nagios basic auth credentials set in the env file
COPY .env /usr/local/nagios/etc/

# Add Nagios and Apache startup script
ADD start.sh /
RUN chmod +x /start.sh

# Expose ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Start Nagios and Apache services on container startup
CMD ["/start.sh"]
