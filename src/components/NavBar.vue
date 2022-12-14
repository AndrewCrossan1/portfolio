<template>
    <div id="navbar" class="sticky-top">
        <b-container fluid>
                <b-navbar toggleable="md" class="p-4 px-5">
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <!--Right hand side of navbar-->
                        <b-navbar-nav>
                            <b-nav-item>
                                <b-link :to="{ name: 'home' }" :active="$route.name === 'home'" class="nav-link" tag="a">
                                    <b-icon
                                        icon="house-door-fill"
                                    />
                                    Home
                                </b-link>
                            </b-nav-item>
                        </b-navbar-nav>
                        <b-navbar-brand class="mx-auto text-bebas-neue text-xl">
                            Andrew Crossan Sites
                        </b-navbar-brand>
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