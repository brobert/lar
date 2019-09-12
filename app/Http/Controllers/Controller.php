<?php

namespace App\Http\Controllers;

use Log;
use Faker\Factory as Faker;
use Illuminate\Http\Request;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    function fallBack(Request $request){

        $methods = get_class_methods($request);
        sort($methods);
        Log::debug('>>> wantsJSON: ' . print_r($methods, 1));
        Log::debug('>>> ajax: ', [ 
            'ajax' => $request->ajax(), 
            'isJson' => $request->isJson(), 
            'wantsJson' => $request->wantsJson(),
        ]);

        if($request->wantsJson() || $request->isJson()){
            return response()->json(['message' => 'Not Found!'], 404);
            abort(404);
            return response()->json(['success'=>'Data is successfully added']);
        }
        Log::debug('>>>>>>> fallBack');
        return view('index');
    }

    public function getBarData(Request $request) {

        $faker = Faker::create();

        return response()->json(
            [
                'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                'datasets' => [
                    [
                        'label' => $faker->company,
                        'backgroundColor' => '#36a2eb',
                        'borderColor' => '#36a2eb',
                        'data' => [
                            $faker->numberBetween(0, 500),
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500)
                        ],
                        'summary' => [
                            'diff' => $faker->randomFloat(1, -100, 100),
                        ],
                    ],
                    [
                        'label' => $faker->company,
                        'backgroundColor' => '#FF6384',
                        'borderColor' => '#FF6384',
                        'data' => [
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500)
                        ],
                        'summary' => [
                            'diff' => $faker->randomFloat(1, -100, 100),
                        ],
                    ]
                ],
            ],
        );
    }

    public function getLineData(Request $request) {
        $faker = Faker::create();
        return response()->json(
            [
                'labels' => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                'datasets' => [
                    [
                        'label' => 'Income',
                        'backgroundColor' => 'rgb(56, 182, 202)',
                        'borderColor' => 'rgb(56, 182, 202)',
                        'pointBorderColor' => '#fff',
                        'data' => [
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500),
                        ],
                    ],[
                        'label' => 'Outcome',
                        'backgroundColor' => 'rgb(249, 249, 249)',
                        'borderColor' => 'rgb(249, 249, 249)',
                        'pointBorderColor' => '#fff',
                        'data' => [
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500), 
                            $faker->numberBetween(0, 500),
                        ],
                    ],
                ]
            ]
        );
    }
}
