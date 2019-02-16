<template>
    <div class="container-fluid">
        <!-- Begin Page Header-->
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">{{mode == 'add' ? 'New' : 'Edit'}} Hub</h2>
                    <div>
                        <div class="page-header-tools">

                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <button @click="$router.push('/internal/hub')" class="btn btn-outline-secondary">Back</button>
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
                                <label class="col-lg-2 form-control-label">Name</label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Type</label>
                                <div class="col-lg-4">
                                    <select class="selectpicker" ref="select" v-model="selected">
                                        <option :value="type.value" v-for="type in listHubType">{{type.label}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Long</label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Lat</label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row d-flex align-items-center mb-5">
                                <label class="col-lg-2 form-control-label">Address</label>
                                <div class="col-lg-5">
                                    <textarea name="" id="" class="form-control" rows="5"></textarea>
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
                selected: '',
                listHubType: [
                    {
                        label: 'Train Station',
                        value: 'TRAIN_STATION',
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
                        self.$router.push('/internal/hub');
                    }, 500);
                })
            }
        },
        mounted()
        {
            let self = this;
            setTimeout(function () {
                self.listHubType = [{
                    label: 'Bus Station',
                    value: 'BUS_STATION',
                },{
                    label: 'Train Station',
                    value: 'TRAIN_STATION',
                }];
            },2000);
        },
        updated ()
        {
            $(this.$refs.select).selectpicker('refresh')
        }
    }
</script>
