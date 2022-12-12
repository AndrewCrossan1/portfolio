<template>
    <div id="navbar" class="sticky-top">
        <b-container fluid class="bg-graphite-gray">
            <b-container size="md">
                <b-navbar toggleable="md" class="p-2 sticky-top">
                    <b-navbar-brand href="/" class="text-cornflower-blue">
                        Andy's Portfolio
                    </b-navbar-brand>
                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
                        <!--Right hand side of navbar-->
                        <b-navbar-nav class="ms-auto">
                            <b-nav-item>
                                <b-link :to="{ name: 'home' }" :active="$route.name === 'home'" class="nav-link text-cornflower-blue" tag="a">
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
        </b-container>
    </div>
</template>