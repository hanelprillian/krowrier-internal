<template>
    <div class="container-fluid">
        <!-- Begin Page Header-->
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Detail'}} Courier</h2>
                    <div>
                        <div class="page-header-tools">
                            <div class="form-group">
                                <div class="btn-group mr-1 mb-2">
                                    <button type="button" class="btn btn-sm btn-success">Active</button>
                                    <a class="btn btn-success btn-sm dropdown-toggle d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="la la-angle-down mr-0"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Suspend</a>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <button @click="$router.push('/internal/courier')" class="btn btn-outline-secondary">Back</button>
                    <button @click="Submit" class="btn btn-outline-primary float-right">Save</button>
                </div>
            </div>
        </div>
        <!-- End Page Header -->
        <div class="row flex-row">
            <div class="col-xl-12">
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
                        self.$router.push('/internal/courier');
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
