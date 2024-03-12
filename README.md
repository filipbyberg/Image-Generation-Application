# Image-Generation-Application
This is my first project using OpenAIs image generation model using DALL-E. Gotta give credit to Traversy Media, as much of the coding was inspired from their tutorials.

** How To **
For this project, you need NodeJS installed. Once installed to your computer, open your VS-Code and install OpenAI package and dotenv for our environment variables.
```
npm i express openai dotenv
```

In the project, there is an .env file. Here you need to define an OpenAI API key. Your unique key can be generated for free here: https://platform.openai.com/api-keys
Add the following line, with your generated key to the file.
```
OPENAI_API_KEY='YOURKEYHERE'
```

Save the project and run:
```
npm run dev
```

Go to your web browser and type:
```
http://localhost:5000/
```

