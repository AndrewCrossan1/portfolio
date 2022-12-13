<template>
    <div id="navbar">
        <b-container fluid>
                <b-navbar toggleable="md" class="p-4 sticky-top px-5">
                    <b-navbar-brand href="/" class="text-graphite-gray">
                        Andy's Portfolio
                    </b-navbar-brand>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <!--Right hand side of navbar-->
                        <b-navbar-nav class="ms-auto">
                            <b-nav-item>
                                <b-link :to="{ name: 'home' }" :active="$route.name === 'home'" class="nav-link" tag="a">
                                    <b-icon
                                        icon="house-door-fill"
                                    />
                                    Home
                                </b-link>
                            </b-nav-item>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
        </b-container>
    </div>
</template>