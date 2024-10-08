FROM python:3.9

WORKDIR /app/backend


# Copy the requirements.txt file and install the dependencies
COPY requirements.txt /app/backend

# Upgrade pip
RUN pip install --upgrade pip


RUN pip install --no-cache-dir -r requirements.txt



# Copy the entire project into the container
COPY . /app/backend

EXPOSE 8000


CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
