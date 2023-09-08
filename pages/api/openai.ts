import { OpenAIApi, Configuration } from "openai";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  text: string;
};

interface GenerateNextApiRequest extends NextApiRequest{
  body: {
    prompt: string;
  };
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const maxChar = 500; //Change max chars

export default async function handler(
  req: GenerateNextApiRequest,
  res: NextApiResponse<ResponseData>
){
  const { ingredients, selectedCategory } = req.query;

  const prompt = `Create a valid JSON array of objects with recipes (minimum of 3 objects), each recipe has to have a name, recipe duration, ingredients used, and preparation details (fields: name, duration, ingredients, preparation). The recipes must contain only these ingredients: ${ingredients} and has to be from category ${selectedCategory}`;

    const aiResult = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: maxChar
    });
  
  const response = aiResult.data.choices[0].text?.trim() || 'Sorry, there was a problem!';
  // let response = "asd"
  res.status(200).json({text: response});
}

// text: "{name: \"Panna cotta\", duration: \"1 hour\", ingredients: \"i dont know\", preparation: \"Lorem ipsum panna cotta preparatum\"}"

/*

{"text":"[\n  {\n    \"name\": \"Asdasd Omelette\",\n    \"ingredients\": [\"asdasd\", \"eggs\", \"salt\", \"pepper\"],\n    \"preparation\": \"In a bowl, whisk together the eggs, asdasd, salt, and pepper. Heat a non-stick pan over medium heat and add the egg mixture. Cook until the eggs are set, about 3 minutes. Flip the omelette and cook for an additional 2 minutes. Serve warm.\"\n  },\n  {\n    \"name\": \"Asdasd Pancakes\",\n    \"ingredients\": [\"asdasd\", \"flour\", \"baking powder\", \"sugar\", \"salt\", \"milk\"],\n    \"preparation\": \"In a bowl, whisk together the flour, baking powder, sugar, and salt. In a separate bowl, whisk together the asdasd and milk. Add the wet ingredients to the dry ingredients and mix until just combined. Heat a non-stick pan over medium heat and add the pancake batter. Cook until the pancakes are golden brown, about 2 minutes per side. Serve warm.\"\n  },\n  {\n    \"name\": \"Asdasd French Toast\",\n    \"ingredients\": [\"asdasd\", \"bread\", \"eggs\", \"milk\", \"sugar\", \"cinnamon\"],\n    \"preparation\": \"In a bowl, whisk together the eggs, milk, sugar, and cinnamon. Dip the bread slices in the egg mixture and let them soak for a few minutes. Heat a non-stick pan over medium heat and add the asdasd. Place the soaked bread slices in the pan and cook until golden brown, about 2 minutes per side. Serve warm.\"\n  }\n]"}

*/