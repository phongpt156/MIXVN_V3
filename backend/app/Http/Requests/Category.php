<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Category extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'order' => 'required|integer',
            'gender' => 'required|integer',
            'parent_category' => 'required|integer',
            'active' => 'required|boolean',
        ];
    }
}
