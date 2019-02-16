<template>
    <div class="container-fluid">
        <!-- Begin Page Header-->
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Detail'}} Booking</h2>
                    <div>
                        <div class="page-header-tools">
                            <span class="badge-text-small success">Complete</span>
                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <button @click="$router.push('/internal/booking')" class="btn btn-outline-secondary">Back</button>
                    <button @click="Submit()" class="btn btn-outline-primary float-right">Save</button>
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
                <div class="widget">
                    <div class="widget-body">
                        <div class="form-group">
                            <label>
                                <span>Data Barang</span>
                            </label>
                            <br>
                            <div class="form-control-static">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label>
                                                <small>
                                                    Jenis Transportasi
                                                </small>
                                            </label>
                                            <div class="form-control-static">
                                                Udara
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="">
                                                <small>
                                                    Paket Booking
                                                </small>
                                            </label>
                                            <div class="form-control-static">
                                                <span>(DTD) Reguler</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="">
                                                <small>
                                                    Komoditas
                                                </small>
                                            </label>
                                            <div class="form-control-static">
                                                <span>General</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <span style="font-size: 12pt">Barang ke <strong>#1</strong> </span>

                                    </div>
                                    <br>

                                    <div>
                                        <div class="form-group">
                                            <label>
                                                <small>
                                                    Nama Barang
                                                </small>
                                            </label>
                                            <div class="form-control-static">
                                                Buku
                                                <br><br>
                                                <small>
                                                    <strong>Berat: </strong>
                                                    50 Kg &nbsp;
                                                    <strong>Panjang: </strong>
                                                    100.00 cm &nbsp;
                                                    <strong>Lebar: </strong>
                                                    200.00 cm &nbsp;
                                                    <strong>Tinggi: </strong>
                                                    30.00 cm &nbsp;
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
                                    <small>Jumlah Barang</small>
                                    <br>
                                    <div class="text">
                                        <strong>
                                            100
                                        </strong>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <small class="text-success">Total Berat</small>
                                    <br>
                                    <div class="text text-success">
                                        <strong>
                                            50.00 Kg
                                        </strong>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <small class="text-success">Total Berat Kubik</small>
                                    <br>
                                    <div class="text text-success">
                                        <strong>
                                            100.00 Kg
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget">
                    <table class="table table-compact">
                        <tbody><tr>
                            <th width="60%">
                                <div class="text-right">
                                    Minimum Tarif
                                    <br>
                                    <small>
                                        per 0 Kg
                                    </small>
                                </div>
                            </th>
                            <td width="30%">
                                <div class="text-left"> 0.00</div>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <div class="text-right">
                                    Tarif Pengiriman
                                    <br>
                                    <small>
                                        per
                                        100.00
                                        Kg
                                    </small>
                                </div>
                            </th>
                            <td>
                                <div class="text-left"> 0.00</div>
                            </td>
                        </tr>
                        <tr>
                            <th><div class="text-right">Biaya lainnya</div></th>
                            <td>
                                <div class="text-left"> 0.00</div>
                            </td>
                        </tr>
                        <tr>
                            <th><h4 class="text-right">Grand Total</h4></th>
                            <td>
                                <h4>
                                    <div class="text-left">  0.00 </div>
                                </h4>
                            </td>
                        </tr>
                        </tbody></table>
                </div>

                <div class="widget">
                    <div class="tab-content">
                        <div id="OtherCharges" class="tab-pane fade in">
                            <div class="col-md-12">
                                <h4 class="pull-left"><i class="fas fa-th-list"></i> &nbsp; Biaya Lainnya &nbsp;
                                    <a href="#" data-toggle="tooltip" title="Refresh">
                                        <i class="fas fa-sync-alt"></i>
                                    </a>
                                </h4>
                                <div class="clearfix"></div>
                                <br>
                            </div>
                            <div class="clearfix"></div>
                            <div class="widget">
                                <div class="table-responsive scrollHorizontal" style="overflow: scroll">
                                    <table class="table table-compact table-header-color table-striped" style="min-width: 1000px;">
                                        <thead>
                                        <tr>
                                            <th style="min-width: 5px"></th>
                                            <th style="min-width: 100px">Nama</th>
                                            <th style="min-width: 100px">Biaya</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td colspan="3" class="oaerror strip-warning">
                                                Tidak ada list biaya lainnya
                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div id="Notes" class="tab-pane fade in">
                            <div class="widget">
                                <div class="widget-heading">
                                    <div class="pull-left">
                                        Biaya Lainnya
                                        <a href="#" data-toggle="tooltip" title="Refresh">
                                            <i class="fas fa-sync-alt"></i>
                                        </a>
                                    </div>

                                    <div class="clearfix"></div>
                                </div>
                                <div class="table-responsive scrollHorizontal" style="overflow: scroll">
                                    <table class="table table-compact table-header-color table-striped" style="min-width: 1000px;">
                                        <thead>
                                        <tr>
                                            <th style="min-width: 5px"></th>
                                            <th style="min-width: 100px">Nama</th>
                                            <th style="min-width: 100px">Biaya</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td colspan="3" class="oaerror strip-warning">
                                                Tidak ada list biaya lainnya
                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <!-- Form -->
                <div class="widget has-shadow">
                    <div class="widget-header">
                        <span>Customer Information</span>
                    </div>
                    <div class="widget-body">
                        <form class="form-horizontal">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Email</label>
                                        <p class="form-control-static">
                                            hanelp97@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">User</label>
                                        <p class="form-control-static">
                                            Jhonny Prillian
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <br>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Identity Type</label>
                                        <select name="" class="selectpicker form-control">
                                            <option value="KTP">KTP</option>
                                            <option value="SIM">SIM</option>
                                            <option value="PASSPORT">Passport</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Identity Number</label>
                                        <input type="text" class="form-control" value="35674545487" placeholder="Identity Number">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Phone</label>
                                        <input type="text" class="form-control" value="081282829092" placeholder="Phone">
                                    </div>
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Birth</label>
                                        <input type="text" class="datpicker form-control" placeholder="Birth">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Gender</label>
                                        <select name="" class="selectpicker form-control">
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Address</label>
                                        <textarea name="" id="" class="form-control" placeholder="Address" rows="5">Komp puri permata blok g1 no 6 cipondoh</textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- End Form -->
                <!-- Form -->
                <div class="widget has-shadow">
                    <div class="widget-header">
                        <span>Courier Information</span>
                    </div>
                    <div class="widget-body">
                        <form class="form-horizontal">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Email</label>
                                        <p class="form-control-static">
                                            hanelp97@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">User</label>
                                        <p class="form-control-static">
                                            Jhonny Prillian
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <br>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Identity Type</label>
                                        <select name="" class="selectpicker form-control">
                                            <option value="KTP">KTP</option>
                                            <option value="SIM">SIM</option>
                                            <option value="PASSPORT">Passport</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Identity Number</label>
                                        <input type="text" class="form-control" value="35674545487" placeholder="Identity Number">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Phone</label>
                                        <input type="text" class="form-control" value="081282829092" placeholder="Phone">
                                    </div>
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Birth</label>
                                        <input type="text" class="datpicker form-control" placeholder="Birth">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Gender</label>
                                        <select name="" class="selectpicker form-control">
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                        </select>
                                    </div>
                                    <div class="form-group align-items-center mb-5">
                                        <label class="form-control-label">Address</label>
                                        <textarea name="" id="" class="form-control" placeholder="Address" rows="5">Komp puri permata blok g1 no 6 cipondoh</textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- End Form -->
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
