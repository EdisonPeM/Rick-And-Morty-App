echo "<Docker> Running Container"
docker run -d --rm -v $(pwd)/src:/app/src --name rick-app -p 3000:3000 rick_app
echo "<Docker> The Container is running in background"