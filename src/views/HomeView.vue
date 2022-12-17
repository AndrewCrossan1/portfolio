<template>
  <div id="home">
    <div id="section-1">
      <b-container size="md">
        <!-- First Section (Introduction) -->
        <b-row>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xl-8 pt-5 text-align">
            <p class="display-1 text-bebas-neue animate-1 animate__animated animate__fadeInLeft">
              Hi, I'm <span class="text-cornflower-blue">Andrew</span>
            <br/>
            </p>
            <p class="display-1 text-bebas-neue animate-2 animate__animated animate__fadeInLeft">
              A <span class="text-cornflower-blue">Software Engineering</span> Student
            <br/>
            </p>
            <p class="display-1 text-bebas-neue animate-3 animate__animated animate__fadeInLeft">
              Welcome to my <span class="text-cornflower-blue">portfolio</span>
            </p>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xl-4 py-5 my-auto animate-4 animate__animated animate__fadeIn">
            <img src="../assets/images/undraw_programming_re_kg9v.svg" alt="Programmer" class="img-fluid"/>
          </div>
        </b-row>
      </b-container>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#53565b" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,224C384,203,480,117,576,90.7C672,64,768,96,864,128C960,160,1056,192,1152,202.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
    <!-- About me -->
    <div id="section-2" class="pt-5">
      <b-container fluid>
        <b-row class="mx-5 justify-content-center">
          <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 border-graphite-gray rounded-1 text-center d-flex align-items-center justify-content-center my-2">
            <span class="display-1 text-bebas-neue animate__animated animate__fadeIn">
              My<br/><span class="text-cornflower-blue">Story</span>
            </span>
          </div>
          <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 text-center align-items-center justify-content-center d-flex">
            <b-icon
            icon="arrow-right"
            class="text-center icon-for-about d-none d-sm-none d-md-none d-lg-block d-xl-block"
            font-scale="6"
            />
          </div>
          <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 border-graphite-gray rounded-1 p-0  my-2">
            <p class="text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn">
              Secondary School
            </p>
            <p class="px-2">
              My Journey began in secondary school where I was introduced to the following technologies:
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>Visual Basic</li>
            </ul>
          </div>
          <div class="col-lg-3 col-xl-3 col-md-3 col-sm-12 text-center align-items-center justify-content-center d-flex">
            <b-icon
            icon="arrow-90deg-down"
            style="
            -moz-transform: scaleX(-1);
            -webkit-transform: scaleX(-1);
            -ms-transform: scaleX(-1);"
            class="text-center d-none d-sm-none d-md-none d-lg-block d-xl-block"
            font-scale="6"
            />
          </div>
        </b-row>
        <b-row class="mx-5 justify-content-center mb-5">
          <div class="col-lg-2 col-xl-2 col-md-2 col-sm-12 border-graphite-gray rounded-1 p-0 my-2">
            <p class="text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn">
              Self Learning
            </p>
            <p class="px-2">
              Throughout this whole journey I have been teaching myself many different concepts to enhance my knowledge and skills.
            </p>
            <ul>
              <li>Vue.JS (You are currently seeing this)</li>
              <li>Bootstrap (You are also seeing this)</li>
              <li>Django REST Framework (This site consumes an API)</li>
              <li>.NET Core (Entity Framework, ML.NET, Razor Pages)</li>
              <li>Apache Server Configuration</li>
              <li>Design with Figma and Adobe XD</li>
            </ul>
          </div>
          <div class="col-lg-2 col-xl-2 col-md-2 col-sm-12 text-center align-items-center justify-content-center d-flex my-2">
            <b-icon
            icon="arrow-left"
            class="text-center d-none d-sm-none d-md-none d-lg-block d-xl-block"
            font-scale="6"
            />
          </div>
          <div class="col-lg-2 col-xl-2 col-md-2 col-sm-12 border-graphite-gray rounded-1 p-0 my-2">
            <p class="text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn">
              University of Strathclyde
            </p>
            <p class="px-2">
              Graduating from Glasgow Clyde College with a HND in Computing: Software Development, I progressed into university where I am now learning the following:
            </p>
            <ul>
              <li>Java (Again)</li>
              <li>Haskell</li>
              <li>C</li>
              <li>Further SQL</li>
              <li>Applicable Python</li>
            </ul>
          </div>
          <div class="col-lg-2 col-xl-2 col-md-2 col-sm-12 text-center align-items-center justify-content-center d-flex">
            <b-icon
            icon="arrow-left"
            class="text-center d-none d-sm-none d-md-none d-lg-block d-xl-block"
            font-scale="6"
            />
          </div>
          <div class="col-lg-2 col-xl-2 col-md-2 col-sm-12 border-graphite-gray rounded-1 p-0">
            <p class="text-bebas-neue text-white bg-graphite-gray display-6 p-2 animate__animated animate__fadeIn">
              College (Higher Education)
            </p>
            <p class="px-2">
              Continuing my journey in college, I was introduced to the following technologies:
            </p>
            <ul>
              <li>C# (My favourite)</li>
              <li>Java</li>
              <li>jQuery</li>
              <li>PHP</li>
              <li>C++</li>
            </ul>
          </div>
        </b-row>
        <b-row class="mb-5">
          <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center align-items-center justify-content-center d-flex">
            <b-icon
            icon="caret-down-fill"
            class="text-center d-none d-sm-none d-md-none d-lg-block d-xl-block"
            font-scale="6"
            />
          </div>
        </b-row>
        <b-row class="my-5 mx-5">
          <div class="col-lg-12 col-xl-12 col-md-12 col-sm-12 text-center border-cornflower-blue p-0 rounded-1">
            <p class="text-bebas-neue text-white bg-cornflower-blue display-6 p-2 animate__animated animate__fadeIn">
              The end result
            </p>
            <b-row class="justify-content-center">
              <div class="col-md-4 col-lg-6 col-xl-6 col-sn-4">
                <img src="../assets/images/undraw_web_developer_re_h7ie.svg" alt="Programmer" class="img-fluid"/>
              </div>
              <div class="col-md-4 col-lg-6 col-xl-6 col-sm-4 d-flex align-items-center justify-content-center">
                <b-row class="w-100">
                  <div class="col-12">
                    <p class="text-md">
                      The journey so far has made me confident in my ability to
                      <span class="text-cornflower-blue"> develop.</span>
                      <br/>
                      I aspire to continue my journey by learning more, taking accredited courses and gaining more experience.
                      <br/>
                      This website is the first step in my journey to becoming a <span class="text-cornflower-blue">Full Stack Developer.</span>
                    </p>
                  </div>
                  <div class="col-12">
                    <p class="text-bebas-neue bg-grapite-gray display-6 p-2 text-center">
                      Professional Accredations
                    </p>
                    <ul class="justify-content-center" style="list-style-type: none;">
                      <li>
                        <a class="btn btn-graphite-gray w-50" href="certificates/course_certificate.pdf" download="programming.pdf">
                          <span class="px-2">Oracle: Database Programming</span>
                        </a>
                      </li>
                      <li class="mt-3">
                        <a class="btn btn-graphite-gray w-50" href="certificates/DatabaseDesign.pdf" download="design.pdf">
                          <span class="px-2">Oracle: Database Design</span>
                        </a>
                      </li>
                      <li class="mt-3">
                        <a class="btn btn-graphite-gray w-50">
                          <span class="px-2">Oracle: Database Fundamentals</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </b-row>
              </div>
            </b-row>
          </div>
        </b-row>
      </b-container>  
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#53565b" fill-opacity="1" d="M0,160L240,32L480,192L720,128L960,320L1200,224L1440,224L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"></path>
    </svg>
    <!-- Recent Projects -->
    <div id="section-3" class="py-5 bg-polygon">
      <b-container fluid class="pt-5">
          <b-row class="justify-content-center">
            <div class="col-md-3 mx-2 bg-white p-0">
              <ProjectCard/>
            </div>
            <div class="col-md-3 mx-2 bg-white p-0">
              This section is not finished yet, there will soon be more projects here :)
            </div>
            <div class="col-md-3 mx-2 bg-white p-0">
            </div>
          </b-row>
          <b-row class="justify-content-center my-3">
            <div class="col-md-3 mx-2 bg-white p-0">
            </div>
            <div class="col-md-3 mx-2 d-flex justify-content-center align-items-center text-center bg-glass">
              <p class="text-bebas-neue display-1 mb-0">
                Recent <br/>
                <span class="text-cornflower-blue">Projects</span>
              </p>
            </div>
            <div class="col-md-3 mx-2 bg-white p-0">
            </div>
          </b-row>
          <b-row class="justify-content-center">
            <div class="col-md-3 mx-2 bg-white p-0">
            </div>
            <div class="col-md-3 mx-2 bg-white p-0">
            </div>
            <div class="col-md-3 mx-2 bg-white p-0">
            </div>
          </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    ProjectCard: () => import("../components/ProjectCard.vue"),
  },
  data() {
    return {

    };
  },
};
</script>