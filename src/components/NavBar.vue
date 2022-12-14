<template>
    <div id="navbar" class="sticky-top custom-nav">
        <b-container fluid>
                <b-navbar toggleable="md" class="p-4 px-5 navbar-brand-center">
                    <!--Right hand side of navbar-->
                    <b-navbar-brand class="text-bebas-neue text-xl d-md-none d-lg-inline-block d-lg-block d-sm-block">
                        <span class="navbar-logo">Andrew Crossan Sites</span>
                    </b-navbar-brand>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="mx-auto"> 
                            <b-nav-item>
                                <b-link :to="{ name: 'home' }" :active="$route.name === 'home'" class="nav-link" tag="a">
                                    <b-icon
                                        icon="house-door-fill"
                                    />
                                    Home
                                </b-link>
                            </b-nav-item>
                        </b-navbar-nav>
                        <b-form inline class="ml-auto">
                            <div class="input-group">
                                <input class="form-control search-form" type="text" id="example-search-input" v-model="searchData" placeholder="Search the site">
                                <span class="input-group-append">
                                    <button class="btn btn-graphite-gray rounded-0 ms-n3 search" @click="search()" type="button">
                                        <b-icon icon="search"/>
                                    </button>
                                </span>
                            </div>
                        </b-form>
                    </b-collapse>
                </b-navbar>
        </b-container>
    </div>
</template>

<script>
 export default {
    name: "NavBar",
    data() {
        return {
            searchData: "",
        };
    },
    methods: {
        search() {
            console.log(this.searchData);
        },
    },
 }
</script>