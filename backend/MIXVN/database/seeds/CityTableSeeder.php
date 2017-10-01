<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class CityTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('city')->insert([
            ['name' => 'Hải Phòng', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hà Nội', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'TP Hồ Chí Minh', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Cần Thơ', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Đà Nẵng', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'An Giang', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bà Rịa - Vũng Tàu', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bắc Giang', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bắc Kạn', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bạc Liêu', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bắc Ninh', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bến Tre', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bình Định', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bình Dương', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bình Phước', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Bình Thuận', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Cà Mau', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Cao Bằng', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Đắk Lắk', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Đắk Nông', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Điện Biên', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Đồng Nai', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Đồng Tháp', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Gia Lai', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hà Giang', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hà Nam', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hà Tĩnh', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hải Dương', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hậu Giang', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hòa Bình', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Hưng Yên', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Khánh Hòa', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Kiên Giang', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Kon Tum', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Lai Châu', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Lâm Đồng', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Lạng Sơn', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Lào Cai', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Long An', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Nam Định', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Nghệ An', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Ninh Bình', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Ninh Thuận', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Phú Thọ', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Quảng Bình', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Quảng Nam', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Quảng Ngãi', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Quảng Ninh', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Quảng Trị', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Sóc Trăng', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Sơn La', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Tây Ninh', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Thái Bình', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Thái Nguyên', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Thanh Hóa', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Thừa Thiên Huế', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Tiền Giang', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Trà Vinh', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Tuyên Quang', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Vĩnh Long', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Vĩnh Phúc', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Yên Bái', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')],
            ['name' => 'Phú Yên', 'created_at' => Carbon::now('UTC'), 'updated_at' => Carbon::now('UTC')]
        ]);
    }
}
