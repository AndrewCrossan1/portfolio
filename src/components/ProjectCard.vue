<template>
    <div class="project" @mouseover="handleVisit(project.id)" @mouseleave="unhandleVisit(project.id)">
        <div class="project-header display-6">
        {{ project.name }}
        </div>
        <div class="project-body" :style="{ backgroundImage: `url(${project.image})`}">
            <div class="container-md px-md-3 px-lg-5 px-sm-2 px-xl-5 px-1">
                <p class="project-description mb-0 text-montserrat">
                    {{ project.description }}
                </p>
            </div>
        </div>
        <div class="project-footer in-progress">
            <a :href="project.link" class="text-decoration-none">
                <p class="project-status mb-0 text-bebas-neue text-lg">
                    <span class="text-white status" v-bind:id="project.id">
                        {{ project.status }}
                    </span>
                </p>
            </a>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProjectCard",
    props: {
        project: {
            type: Object,
            required: true,
            default: () => ({
                id: 1,
                name: "Andrew's Portfolio",
                description: "Andrew's Portfolio is my own portfolio which is powered by Vue and Django. It is hosted on Github Pages and uses a custom image handler for the uploading of images like the one used behind this text",
                image: "https://picsum.photos/500/160",
                link: "https://andrewcrossan1.github.io/portfolio/",
                status: "In Progress",
            }),
        },
    },
    methods: {
        /* Make a function that causes the card to fade into a black background then show 'visit me' in white text which links to the project link */
        handleVisit(id) {
            let status = document.getElementById(`${id}`);
            status.innerHTML = "Visit Me";
        },
        unhandleVisit(id) {
            let status = document.getElementById(`${id}`);
            status.innerHTML = this.project.status;
        },
    },
}
</script>

<style lang="scss">
    .project:hover {
        .project-header {
            background-color: black;
            color: white;
        }
        .project-footer {
            background-color: black;
            color: white;
        }
        .project-body {
            background-color: black;
            color: white;
        }
        .status::after {
            transform: scaleX(1);
        }
    }
    
    .project-footer:hover {
        cursor: pointer;
    }
</style>