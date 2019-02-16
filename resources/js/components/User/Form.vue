<template>
    <div class="container-fluid">
        <!-- Begin Page Header-->
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Edit'}} User</h2>
                    <div>
                        <div class="page-header-tools">

                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <button @click="$router.push('/internal/user')" class="btn btn-outline-secondary">Back</button>
                </div>
            </div>
        </div>
        <!-- End Page Header -->
        <div class="row flex-row">
            <div class="col-xl-12">
                <!-- Form -->
                <div class="widget has-shadow">
                    <div class="widget-body">
                        <form class="form-horizontal">
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Email</label>
                                <div class="col-lg-4">
                                    <input type="email" class="form-control" placeholder="Email">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Password</label>
                                <div class="col-lg-3">
                                    <input type="password" class="form-control" placeholder="Password">
                                </div>
                                <div class="col-lg-3">
                                    <input type="password" class="form-control" placeholder="Confirmation Password">
                                </div>
                            </div>
                            <hr>
                            <br>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">First Name</label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" placeholder="First Name">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Last Name</label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" placeholder="Last Name">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Phone</label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" placeholder="Phone">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Birth</label>
                                <div class="col-lg-4">
                                    <input type="text" class="datpicker form-control" placeholder="Birth">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Gender</label>
                                <div class="col-lg-4">
                                    <select name="" class="selectpicker">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Address</label>
                                <div class="col-lg-5">
                                    <textarea name="" id="" class="form-control" placeholder="Address" rows="5"></textarea>
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label"></label>
                                <div class="col-lg-4">
                                    <button class="btn btn-primary" @click.prevent="Submit()">Save</button>
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
                        self.$router.push('/internal/user');
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
