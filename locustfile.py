from locust import HttpUser, task, between

class ApiUser(HttpUser):
    wait_time = between(1, 3)

    @task
    def get_users(self):
        self.client.get("/users")

    @task
    def get_user_by_id(self):
        user_id = 1
        self.client.get(f"/users/{user_id}")

    @task
    def create_user(self):
        self.client.post("/users", json={"name": "New User"})

    @task
    def update_user(self):
        user_id = 1
        self.client.put(f"/users/{user_id}", json={"name": "Updated User"})

    @task
    def delete_user(self):
        user_id = 1
        self.client.delete(f"/users/{user_id}")
