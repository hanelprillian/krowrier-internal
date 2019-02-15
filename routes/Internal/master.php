<?php

Route::group([
    'prefix' => 'service-package',
    'as' => 'ServicePackage::',
], function ()
{
    Route::any('api', [
        'as' => 'API::',
        'uses' => 'ServicePackageCtrl@api'
    ]);
    Route::get('/', [
        'as' => 'Index::',
        'uses' => 'ServicePackageCtrl@index'
    ]);
    Route::get('/add', [
        'as' => 'Add::',
        'uses' => 'ServicePackageCtrl@add'
    ]);
    Route::get('/edit/{?key}', [
        'as' => 'Edit::',
        'uses' => 'ServicePackageCtrl@edit'
    ]);
    Route::post('/save', [
        'as' => 'Save::',
        'uses' => 'ServicePackageCtrl@save'
    ]);
    Route::post('/delete', [
        'as' => 'delete::',
        'uses' => 'ServicePackageCtrl@destroy'
    ]);
});

