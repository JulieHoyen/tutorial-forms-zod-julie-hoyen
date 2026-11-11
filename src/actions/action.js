"use server";
import * as z from "zod";
import { Recipe } from "@/app/recipeSchema/recipeSchema";
// import { useState } from "react";

export async function createRecipe(formData) {
  //   const servings = formData.get("servings");
  //   // console.log("Antal portioner:", servings);
}

const postRecipe = async (previousState, formData) => {
  const recipeName = formData.get("recipename");
  const ingredients = formData.get("ingredients");
  const difficulty = formData.get("difficulty");
  const prepTimeMinutes = formData.get("prepTimeMinutes");
  // const cookTimeMinutes = formData.get("cookTimeMinutes");
  const servings = formData.get("servings");

  console.log("recipename", recipeName);
  console.log("ingredients", ingredients);
  console.log("difficulty", difficulty);
  console.log("prepTimeMinutes", prepTimeMinutes);
  // console.log("cookTimeMinutes", cookTimeMinutes);
  console.log("servings", servings);

  const validatedFields = Recipe.safeParse({
    recipename: recipeName,
    ingredients: ingredients,
    difficulty: difficulty,
    prepTimeMinutes: prepTimeMinutes,
    // cookTimeMinutes: cookTimeMinutes,
    servings: servings,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Kontrollér opskriftens navn",
      fieldErrors: z.flattenError(validatedFields.error).fieldErrors,
    };
  }
  try {
    const response = await fetch("https://dummyjson.com/recipes/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: validatedFields.data.recipename,
        ingredients: validatedFields.data.ingredients
          .split(",")
          .map((ingredients) => ingredients.trim())
          .filter(Boolean),

        difficulty: validatedFields.data.difficulty,

        prepTimeMinutes: validatedFields.data.prepTimeMinutes,
     

        // cookTimeMinutes: validatedFields.data.cookTimeMinutes
        //   .split(",")
        //   .map((cookTimeMinutes) => cookTimeMinutes.trim())
        //   .filter(Number),

        servings: validatedFields.data.servings,
      }),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    console.log(`Response status: ${response.status}`);
    return { success: true, message: "Opskriften blev oprettet. Hurra!!!!" };
  } catch (error) {
    return {
      success: false,
      message: "Der er desværre sket en fejl. Prøv igen senere",
      fieldErrors: {},
    };
  }
};

export default postRecipe;
