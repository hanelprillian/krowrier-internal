<template>
    <div class="container-fluid">
        <!-- Begin Page Header-->
        <div class="row">
            <div class="page-header">
                <div class="d-flex align-items-center">
                    <h2 class="page-header-title">Courier</h2>
                    <div>
                        <div class="page-header-tools">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Page Header -->
        <div class="row flex-row">
            <div class="col-xl-12">
                <!-- Begin Widget 07 -->
                <div class="widget widget-07 has-shadow">
                    <!-- Begin Widget Header -->
                    <div class="widget-header bordered d-flex align-items-center">
                        <h2>List Data</h2>
                    </div>
                    <!-- End Widget Header -->
                    <!-- Begin Widget Body -->
                    <div class="widget-body">
                        <div class="table-responsive table-scroll padding-right-10" style="max-height:520px;">
                            <table class="table table-hover mb-0">
                                <thead>
                                <tr>
                                    <th>
                                        <div class="styled-checkbox mt-2">
                                            <input type="checkbox" name="check-all" id="check-all">
                                            <label for="check-all"></label>
                                        </div>
                                    </th>
                                    <th>Name</th>
                                    <th>ID Number</th>
                                    <th>ID Type</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td style="width:5%;">
                                        <div class="styled-checkbox mt-2">
                                            <input type="checkbox" name="cb10" id="cb10">
                                            <label for="cb10"></label>
                                        </div>
                                    </td>
                                    <td>Jhonny Prillian</td>
                                    <td>365454465767</td>
                                    <td>KTP</td>
                                    <td>hanelp97@gmail.com</td>
                                    <td>081282892093</td>
                                    <td>Puri Permata Blok G1 no 6</td>
                                    <td>
                                        <span class="badge-text success">Active</span>
                                    </td>
                                    <td class="td-actions">
                                        <router-link tag="a" to="/internal/courier/1">
                                            <i class="la la-edit edit"></i>
                                        </router-link>
                                        <a href="#"><i class="la la-close delete"></i></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- End Widget Body -->
                    <!-- Begin Widget Footer -->
                    <div class="widget-footer d-flex align-items-center">
                        <div class="mr-auto p-2">
                            <span class="display-items">Showing 1-30 / 150 Results</span>
                        </div>
                        <div class="p-2">
                            <nav aria-label="...">
                                <ul class="pagination justify-content-end">
                                    <li class="page-item disabled">
                                        <span class="page-link"><i class="ion-chevron-left"></i></span>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active">
                                        <span class="page-link">2<span class="sr-only">(current)</span></span>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="ion-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <!-- End Widget Footer -->
                </div>
                <!-- End Widget 07 -->
            </div>
        </div>
        <!-- End Row -->
    </div>
</template>

<script>
    export default {

        mounted() {
        }
    }
</script>
