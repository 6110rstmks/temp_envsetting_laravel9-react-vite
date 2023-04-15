<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\Category;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{
    public function index()
    {
        Log::debug('li');
        return Category::latest()->get();
    }

    public function show(Category $category)
    {
        return $category;
    }

    public function maxCategory()
    {
        $maxId = Category::max('id');


        // if category is not exist...
        if ($maxId == null)
        {
            return;
        }

        return Category::find(Category::max('id'));
    }


    public function destroy(Category $category)
    {
        $category->delete();

        return 'complete';

    }

    public function store(Request $request)
    {

        $category = new Category();
        $category->title = $request->title;
        $category->save();

        return 'complete';

    }
}
