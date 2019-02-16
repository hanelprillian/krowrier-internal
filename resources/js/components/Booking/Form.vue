<template>
    <div class="container-fluid">
        <!-- Begin Page Header-->
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Detail'}} Booking</h2>
                    <div>
                        <div class="page-header-tools">
                            <span class="badge-text badge-text-small success">Complete</span>
                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <button @click="$router.push('/internal/booking')" class="btn btn-outline-secondary">Back</button>
                    <!--<button @click="Submit()" class="btn btn-outline-primary float-right">Save</button>-->
                </div>
            </div>
        </div>
        <!-- End Page Header -->
        <div class="row flex-row">
            <div class="col-xl-12">
                <div class="widget widget-default">
                    <div class="widget-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">Booking Number</label>
                                    <p class="form-control-static">
                                        BK190201GHJ
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="form-control-label">
                                        Date
                                    </label>
                                    <p class="form-control-static">
                                        <span>14-02-2019</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget widget-default">
                    <div class="widget-body">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label>
                                        <span>Customer</span>
                                    </label>
                                    <div class="form-control-static">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Name
                                                    </label>
                                                    <p class="form-control-static">
                                                        Jhonny Prillian
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Origin Address
                                                    </label>
                                                    <p class="form-control-static">
                                                        DKI JAKARTA
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Phone
                                                    </label>
                                                    <p class="form-control-static">
                                                        081380011003
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Pickup Address
                                                    </label>
                                                    <p class="form-control-static">
                                                        Kalideres
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <i class="fas fa-arrow-right" style="margin-top:50%;font-size: 13pt"></i>
                            </div>
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label>
                                        <span>Receiver</span>
                                    </label>
                                    <div class="form-control-static">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Name
                                                    </label>
                                                    <p class="form-control-static">
                                                        rio Pro
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Destination Address
                                                    </label>
                                                    <p class="form-control-static">
                                                        Bogor, Ciawi
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Phone
                                                    </label>
                                                    <p class="form-control-static">
                                                        082380011133
                                                    </p>

                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Destination Address
                                                    </label>
                                                    <p class="form-control-static">
                                                        Jln moch yamin sh
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget widget-default">
                    <div class="widget-header">
                        Courier Information
                    </div>
                    <div class="widget-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>
                                        <span>
                                            Feeder
                                            &nbsp; <small class="badge-text badge-text-small success bg-gradient-02">Pickup</small>
                                        </span>
                                    </label>
                                    <div class="form-control-static">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Name
                                                    </label>
                                                    <p class="form-control-static">
                                                        Laenaldi Saputri
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Pickup Address
                                                    </label>
                                                    <p class="form-control-static">
                                                        Bojong nangka
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Phone
                                                    </label>
                                                    <p class="form-control-static">
                                                        081380011003
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Vehicle
                                                    </label>
                                                    <p class="form-control-static">
                                                        Motor Cycle
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>
                                        <span>Courier</span>
                                    </label>
                                    <div class="form-control-static">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Name
                                                    </label>
                                                    <p class="form-control-static">
                                                        Maemunah
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Origin Hub
                                                    </label>
                                                    <p class="form-control-static">
                                                        Stasiun Gambir
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Destination Hub
                                                    </label>
                                                    <p class="form-control-static">
                                                        Stasiun Bogor
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Phone
                                                    </label>
                                                    <p class="form-control-static">
                                                        081380011003
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label>
                                        <span>
                                            Feeder
                                            &nbsp; <small class="badge-text badge-text-small success bg-gradient-03">Delivery</small>
                                        </span>
                                    </label>
                                    <div class="form-control-static">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Name
                                                    </label>
                                                    <p class="form-control-static">
                                                        Handoko
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Delivery Address
                                                    </label>
                                                    <p class="form-control-static">
                                                        Taman bunga matahari
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Phone
                                                    </label>
                                                    <p class="form-control-static">
                                                        081380011003
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label class="form-control-label">
                                                        Vehicle
                                                    </label>
                                                    <p class="form-control-static">
                                                        Motor Cycle
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="widget">
                    <div class="widget-body">
                        <div class="form-group">
                            <label>
                                <span>Booking Item</span>
                            </label>
                            <br>
                            <br>
                            <div class="form-control-static">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="form-control-label">
                                                Service Package
                                            </label>
                                            <div class="form-control-static">
                                                One day service
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <span style="font-size: 12pt">Item <strong>#1</strong> </span>
                                    </div>
                                    <br>
                                    <div>
                                        <div class="form-group">
                                            <label class="form-control-label">
                                                Item
                                            </label>
                                            <div class="form-control-static">
                                                Buku
                                                <br><br>
                                                <small>
                                                    <strong>Weight: </strong>
                                                    50 Kg &nbsp;
                                                    <strong>Jumlah: </strong>
                                                    100 &nbsp;
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"></div>
                                <hr>
                            </div>

                            <div class="clearfix"></div>
                            <hr>
                            <div class="row">
                                <div class="col-md-4 col-sm-4">
                                    <small>Total Item</small>
                                    <br>
                                    <div class="text">
                                        <strong>
                                            1
                                        </strong>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <small class="text-success">Total Weight</small>
                                    <br>
                                    <div class="text text-success">
                                        <strong>
                                            1 Kg
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <table class="table table-compact">
                        <tbody>
                        <tr>
                            <th>
                                <div class="text-right">
                                    Charges
                                    <br>
                                    <small>
                                        1 Kg
                                    </small>
                                </div>
                            </th>
                            <td>
                                <div class="text-left"> 9000</div>
                            </td>
                        </tr>
                        <tr>
                            <th><div class="text-right">Other Charges</div></th>
                            <td>
                                <div class="text-left"> 0.00</div>
                            </td>
                        </tr>
                        <tr>
                            <th><h4 class="text-right">Total Charges</h4></th>
                            <td>
                                <h4>
                                    <div class="text-left">  Rp. 9000 </div>
                                </h4>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- End Row -->
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                listIdentityType: [
                    {
                        label: 'KTP',
                        value: 'KTP',
                    }
                ]
            }
        },
        props: ['mode'],
        methods: {
            Submit()
            {
                let self = this;

                swal.fire({
                    // show error popup
                    title: 'Saved',
                    text: 'Your data saved',
                    type: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
                }).then(function () {
                    setTimeout(function () {
                        self.$router.push('/internal/booking');
                    }, 500);
                })
            }
        },
        mounted() {
            $('.selectpicker').selectpicker();
            $('.datpicker').daterangepicker({
                singleDatePicker: true,
                locale: {
                    format: 'MM/DD/YYYY'
                }
            });
        }
    }
</script>
