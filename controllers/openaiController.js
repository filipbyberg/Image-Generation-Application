//const { Configuration, OpenAIApi } = require("openai");

//const configuration = new Configuration({
//    apiKey: process.env.OPEN_API_KEY,
//});
//const openai = new OpenAIApi(configuration);

const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


const generateImage = async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "url"
        });

        const imageUrl = response.data[0].url;

        res.status(200).json({
            success: true,
            data: imageUrl
        });
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } 
        else {
            console.log(error.message);
        }

        res.status(400).json({
            success: false,
            error: 'Nope'
        });
    }
}

module.exports = { generateImage };