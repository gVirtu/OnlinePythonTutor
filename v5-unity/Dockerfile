FROM python:3.6 AS build

WORKDIR /opt/tcc

# Install base dependencies
RUN apt-get update -y -q && apt-get install -y -q --no-install-recommends \
        apt-transport-https \
        build-essential \
        ca-certificates \
        curl \
        git \
        libssl-dev \
        python \
        rsync \
        software-properties-common \
        wget \
    && rm -rf /var/lib/apt/lists/*

COPY . .
RUN pip3 install --no-cache-dir -r requirements.txt

EXPOSE 8003

CMD ["python3", "-O", "bottle_server.py"]
