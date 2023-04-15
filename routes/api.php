<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\RecipeController;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/categories', [CategoryController::class, 'index']);


Route::get('/categories/{category}', [CategoryController::class, 'show'])
    ->name('category.show')
    ->where('category', '[0-9]+');


Route::post('/categories/store', [CategoryController::class, 'store']);


Route::get('/max', [CategoryController::class, 'maxCategory']);
// なぜか '/categories/max'のurlだとうまくいかない。
// Route::get('/categories/max', [CategoryController::class, 'maxCategory']);

Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])
    ->where('category', '[0-9]+');


/* --------------------------------------------------------- */
                /* RecipeController */

Route::get('/categories/{category}/recipes', [RecipeController::class, 'getRecipes'])
    ->where('category', '[0-9]+');


Route::post('/categories/{category}/recipes/store', [RecipeController::class, 'store'])
    ->where('category', '[0-9]+');

Route::delete('/categories/recipes/delete/{recipe}', [RecipeController::class, 'delete'])
    ->where('recipe', '[0-9]+');

Route::post('/img_upload',[RecipeController::class, 'imgUpload']);
    // ->name('')
    // $file_name = request()->file->getClientOriginalName();
    // request()->file->storeAs('public/',$file_name);

Route::get('/recipes/show/{recipe}', [RecipeController::class, 'detailedPage'])
    ->name('recipe.show')
    ->where('recipe', '[0-9]+');

