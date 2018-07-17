<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FeatureValue extends FormRequest
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
            'vi_name' => 'required',
            'order' => 'required',
            'feature' => 'required|integer',
            'active' => 'required|boolean'
        ];
    }
}
