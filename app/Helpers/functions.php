<?php
if (! function_exists('send_email'))
{
    function send_email()
    {

    }
}

if (! function_exists('upload_file'))
{

    function upload_file($file, $destination, $newname, $type="img")
    {
        $extension = $file->getClientOriginalExtension();
        $path = "img/";

        if($type=="files")
            $path = "files/";

        $upload = $file->move(public_path()."/upload/$path$destination", $newname.'.'.$extension);
        if($upload) {
            return true;
        }
        return false;
    }
}


/*
 * Return Boolean
 */

if (! function_exists('delete_file'))
{

    function delete_file($file, $destination=NULL,$type="img")
    {
        $path = "img/";
        $status = false;

        if($type=="files")
            $path = "files/";

        if(file_exists(public_path()."/upload/$path$destination/$file"))
        {
            if(unlink(public_path()."/upload/$path$destination/$file"))
                $status = true;
        }
        return $status;
    }

}

if (! function_exists('download_file'))
{

    function download_file($file, $destination, $type="img", $content_type = "application/excel")
    {
        $path = "img/";

        if($type=="files")
            $path = "files/";

        if(file_exists(public_path()."/upload/$path$destination/$file"))
        {
            $target = public_path()."/upload/$path$destination/$file";

            $headers = [
                'Content-Type' => $content_type,
            ];

            return response()->download($target, $file, $headers);
        }

        return false;
    }
}

if (! function_exists('isJSON'))
{

    function isJSON($string)
    {
        return is_string($string) && is_array(json_decode($string, true)) && (json_last_error() == JSON_ERROR_NONE) ? true : false;
    }

}

if(!function_exists('parse_cond'))
{
    function parse_cond($var1, $op, $var2)
    {
        switch ($op) {
            case "=":  return $var1 == $var2;
            case "!=": return $var1 != $var2;
            case ">=": return $var1 >= $var2;
            case "<=": return $var1 <= $var2;
            case ">":  return $var1 >  $var2;
            case "<":  return $var1 <  $var2;
            default:       return true;
        }
    }
}

if(!function_exists('indonesia_month'))
{
    function indonesia_month($month)
    {
        $return = "";

        if($month == '01' || $month == 1 )
        {
            $return = 'Januari';
        }
        else if($month == '02' || $month == 2 )
        {
            $return = 'Febuari';
        }
        else if($month == '03' || $month == 3 )
        {
            $return = 'Maret';
        }
        else if($month == '04' || $month == 4 )
        {
            $return = 'April';
        }
        else if($month == '05' || $month == 5 )
        {
            $return = 'Mei';
        }
        else if($month == '06' || $month == 6 )
        {
            $return = 'Juni';
        }
        else if($month == '07' || $month == 7 )
        {
            $return = 'July';
        }
        else if($month == '08' || $month == 8 )
        {
            $return = 'Agustus';
        }
        else if($month == '09' || $month == 9 )
        {
            $return = 'September';
        }
        else if($month == '10' || $month == 10 )
        {
            $return = 'Oktober';
        }
        else if($month == '11' || $month == 11 )
        {
            $return = 'November';
        }
        else if($month == '12' || $month == 12 )
        {
            $return = 'Desember';
        }

        return $return;
    }
}

if(!function_exists('indonesia_day'))
{
    function indonesia_day($day_number)
    {
        $return = "";

        if($day_number == '01' || $day_number == 1 )
        {
            $return = 'Senin';
        }
        else if($day_number == '02' || $day_number == 2 )
        {
            $return = 'Selasa';
        }
        else if($day_number == '03' || $day_number == 3 )
        {
            $return = 'Rabu';
        }
        else if($day_number == '04' || $day_number == 4 )
        {
            $return = 'Kamis';
        }
        else if($day_number == '05' || $day_number == 5 )
        {
            $return = 'Jumat';
        }
        else if($day_number == '06' || $day_number == 6 )
        {
            $return = 'Sabtu';
        }
        else if($day_number == '0' || $day_number == 0 )
        {
            $return = 'Minggu';
        }

        return $return;
    }
}

if(!function_exists('loop_white_space'))
{
    function loop_white_space($total, $char)
    {
        $output = "";

        for($i = 1;$i<=$total;$i++)
            $output.= $char;

        return $output;
    }
}

if(!function_exists('compare_date'))
{
    function compare_date($d1,$op,$d2)
    {
        if(parse_cond(\Carbon\Carbon::parse($d1)->toDateString(),$op,\Carbon\Carbon::parse($d2)->toDateString()))
            return true;

        return false;
    }
}

if(!function_exists('setting'))
{
    function setting($name)
    {
        $settings   = \App\Models\Setting::ByName($name)->first();
        return $settings['setting_value']?:null;
    }
}

if(!function_exists('exception'))
{
    function exception($message, $class = 'Exception')
    {
        throw new \Exception("$message");
    }
}

if(!function_exists('_exception_message'))
{
    function _exception_message(Exception $e)
    {
        $message = $e->getMessage();

        if(config('app.debug'))
        {
            $message.= "\n";
            $message.= "<small><code>File: {$e->getFile()} in line ". $e->getLine()."</code></small>";
            $message.= "\n\n Trace: <div class='form-control input-sm table-responsive scrollHorizontal' style='max-height:400px' disabled>".get_exception_as_string($e)." </div>";
        }
        else
        {

        }

        return $message;
    }
}

if(!function_exists('get_exception_as_string'))
{
    function get_exception_as_string($exception) {
        $rtn = "";
        $count = 0;
        foreach ($exception->getTrace() as $frame) {
            $args = "";
            if (isset($frame['args'])) {
                $args = array();
                foreach ($frame['args'] as $arg) {
                    if (is_string($arg)) {
                        $args[] = "'" . $arg . "'";
                    } elseif (is_array($arg)) {
                        $args[] = "Array";
                    } elseif (is_null($arg)) {
                        $args[] = 'NULL';
                    } elseif (is_bool($arg)) {
                        $args[] = ($arg) ? "true" : "false";
                    } elseif (is_object($arg)) {
                        $args[] = get_class($arg);
                    } elseif (is_resource($arg)) {
                        $args[] = get_resource_type($arg);
                    } else {
                        $args[] = $arg;
                    }
                }
                $args = join(", ", $args);
            }
            $rtn .= sprintf( "#%s <code>%s(%s)</code>: %s(%s)\n\n",
                $count,
                isset($frame['file']) ? $frame['file'] : 'unknown file',
                isset($frame['line']) ? $frame['line'] : 'unknown line',
                (isset($frame['class']))  ? $frame['class'].$frame['type'].$frame['function'] : $frame['function'],
                $args );
            $count++;
        }
        return $rtn;
    }
}

if(!function_exists('url_add_param'))
{
    function url_add_param($param = [])
    {
        return '?'.http_build_query(array_merge($_GET, $param));
    }
}

if(!function_exists('url_set_param'))
{
    function url_set_param($param = [])
    {
        return '?'.http_build_query($param);
    }
}

if(!function_exists('clear_cache'))
{
    function clear_cache ()
    {
        \Illuminate\Support\Facades\Artisan::call('cache:clear');
        \Illuminate\Support\Facades\Artisan::call('config:clear');
    }
}

if(!function_exists('run_queue'))
{
    function run_queue ()
    {
        return \Illuminate\Support\Facades\Artisan::call('queue:listen');
    }
}

if(!function_exists('parse_array'))
{
    function parse_array($array, $separator = ',', $type = 'string')
    {
        $ar = explode($separator,$array);

        $ar = array_map(function ($value) use ($type)
        {
            if($type == 'string')
            {
                return (string) ($value);
            }
            elseif($type == 'int')
            {
                return (int) ($value);
            }
        },
            $ar);

        return $ar;
    }
}

if(!function_exists('currency'))
{
    function currency ( $number, $precision = 2)
    {
        return @number_format($number, $precision, '.', ',') ? : 0;
    }
}

if(!function_exists('generate_code'))
{
    //    #================= USER GUIDE =======================================
    //    generate_code('bank_cash_book',new BankTransaction(),'2017-10-10',[
    //        'SEQ_COLUMN' => 'seq',
    //        'DATE_COLUMN' => 'transaction_date',
    //        'PREFIX' => [
    //            [
    //                'NAME' => 'BANK_CODE',
    //                'VALUE' => 'BCA01'
    //            ]
    //        ],
    //        'FILTER_BY' => ['settlement_module'=>'CB']
    //          'OUTPUT' => 'seq',
    //    ]);

    function generate_code($running_code, \Illuminate\Database\Eloquent\Model $model, $date, $setting = [])
    {
        $get_running_code = \App\Models\RunningCode::find(setting(strtolower($running_code."_running_code")));
        $date = $date ? \Carbon\Carbon::parse($date) : \Carbon\Carbon::now();

        $p = [
            '$D'=>date('d',strtotime($date)),
            '$M'=>date('m',strtotime($date)),
            '$Y'=>date('Y',strtotime($date)),
            '$N'=>1
        ];

        $data = $model->select('*');

        if(isset($setting['PREFIX']))
        {
            foreach($setting['PREFIX'] as $key => $val)
            {
                $p['$'.$val['NAME']] = $val['VALUE'];
            }
        }

        if(isset($setting['FILTER_BY']))
        {
            $data->where($setting['FILTER_BY']);
        }

        if($get_running_code->year_format == 2)
        {
            $p['$Y'] = \Carbon\Carbon::create($p['$Y'])->format('y');
        }
        else if($get_running_code->year_format == 4)
        {
            $p['$Y'] = \Carbon\Carbon::create($p['$Y'])->format('Y');
        }

        $reset_number = "NEVER";

        if($get_running_code->reset_number=="M")
        {
            $reset_number = "MONTHLY";
        }
        else if($get_running_code->reset_number=="Y")
        {
            $reset_number = "ANNUALLY";
        }

        if(isset($setting['DATE_COLUMN']))
        {
            if($reset_number == "MONTHLY")
            {
                $data->whereMonth($setting['DATE_COLUMN'],$date->month);
            }
            else if($reset_number == "ANNUALLY")
            {
                $data->whereYear($setting['DATE_COLUMN'],$date->year);
            }
        }

        if(isset($setting['SEQ_COLUMN']))
        {
            $data->orderBy($setting['SEQ_COLUMN'],'desc');
        }
        else
        {
            $data->orderBy('seq','desc');
        }

        if($model->getKey() != null && $data->first())
        {
            $p['$N'] =  $data->first()->{$setting['SEQ_COLUMN']} + 1;

            if($model->getKey() == $data->first()->getKey())
            {
                $p['$N'] = $model->{$setting['SEQ_COLUMN']};
            }
        }
        else if($data->first())
        {
            $p['$N'] =  $data->first()->{$setting['SEQ_COLUMN']} + 1;
        }

        if(isset($setting['OUTPUT']))
        {
            if($setting['OUTPUT'] == 'number')
            {
                $running_code =  $p['$N'];
            }
            else if($setting['OUTPUT'] == 'code')
            {
                $p['$N'] = str_pad($p['$N'],$get_running_code->num_digit,"0",STR_PAD_LEFT);
                $running_code = strtr($get_running_code->format,$p);
            }
        }
        else
        {
            $p['$N'] = str_pad($p['$N'],$get_running_code->num_digit,"0",STR_PAD_LEFT);
            $running_code = strtr($get_running_code->format,$p);
        }

        return $running_code;
    }
}

// EXAMPLE OF USING
//  15 USD to IDR (IDR is default currency)
// currency_convert(15,"USD")

if(!function_exists('currency_convert'))
{
    function currency_convert($amount, $currency_code, $currency_code_to = null, $date = null, $rate = null)
    {
        $currency_code = strtoupper($currency_code);
        $currency_code_to = strtoupper($currency_code_to);
        $date = $date ? \Carbon\Carbon::parse($date)->format('Y-m-d') : \Carbon\Carbon::now()->format('Y-m-d');

        $new_amount = $amount;

        if($currency_code_to != null)
        {
            $currency = \App\Models\Currency::code($currency_code_to)->first();

            if($currency_code == $currency_code_to)
                $current_ex_rate = 1;

            if($rate != null)
                $current_ex_rate = $rate;

            if(check_exchange_rate($currency_code, $currency_code_to,$date))
            {
                $current_ex_rate = get_current_exchange_rate($currency_code, $currency_code_to, $date)->rate;

                eval('$new_amount'.$currency->operator.'=$current_ex_rate;');
            }
        }
        else
        {
            // get default currency
            $default_currency = \App\Models\Currency::find(setting('default_currency'));

            eval('$new_amount'.$default_currency->operator.'=1;');

            if($default_currency->code != $currency_code)
            {
                if(check_exchange_rate($currency_code, $default_currency->code,$date))
                {
                    $current_ex_rate = get_current_exchange_rate($currency_code, $default_currency->code, $date)->rate;

                    if($rate != null)
                        $current_ex_rate = $rate;

                    eval('$new_amount'.$default_currency->operator.'=$current_ex_rate;');
                }
            }
        }

        return (float)$new_amount;
    }
}

if(!function_exists('role'))
{
    function role($roles = [])
    {
        if(in_array(auth()->user()->role, $roles))
            return true;

        return false;
    }
}

if(!function_exists('not_role'))
{
    function not_role($roles = [])
    {
        if(!in_array(auth()->user()->role, $roles))
            return true;

        return false;
    }
}