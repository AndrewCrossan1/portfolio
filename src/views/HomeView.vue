<template>
  <div id="home">
    <div id="section-1" class=" snap-1">
      <b-container size="md">
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
    <div id="section-2" class="vh-100 snap-2 bg-graphite-gray">
      <b-container size="md" class="pt-5">
        <b-row>
          <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 h-same-as">
            <h1 class="display-1 text-bebas-neue text-cornflower-blue text-decoration-underline">About Me</h1>
            <div class="col-md-12">
              <div class="terminal-wrapper">
                <div class="terminal-content">
                  <p>> My journey started when I was young, messing around on websites which led me to eventually create my own html page which had a whopping
                  3 headers!
                  From that moment I knew I wanted to create things with computers, throughout my education I continued learning more and more
                  until I was able to create my own website, which you are currently on!
                  Finally, I now attend the University of Strathclyde studying Software Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 h-same-as">
            <h1 class="display-1 text-bebas-neue text-cornflower-blue text-decoration-underline">My Experience</h1>
            <div class="col-md-12">
              <div class="terminal-wrapper">
                <div class="terminal-content">
                  <p>> C# (ASP.NET, ML.NET and Object-Oriented Software Development) </p>
                  <p>> C (Data Structures, CLI Applications and simple applications)</p>
                  <p>> Java (Algorithms, Data Structures, CLI Applications, Minecraft Plugins and Swing Applications)</p>
                  <p>> Python (Django REST framework, Data Structures, ML, Algorithms, Automated Testing and GPIO Interaction) </p>
                  <p>> SQL (Advanced Querying, Optimisation, Administration and Design - PostgreSQL and MySQL)</p>
                  <p>> JavaScript (Vanilla JavaScript, Vue.JS and jQuery)</p>
                  <p>> LAMP Stack (Vanilla PHP Development, Configuring an Apache Server and Designing a MySQL Database)</p>
                  <p>> Bash Scripting (Helpful automation, Linux administration and scheduling) </p>
                </div>
              </div>
            </div>
          </div>
        </b-row>
      </b-container>  
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
     <path fill="#53565b" fill-opacity="1" d="M0,128L160,256L320,160L480,160L640,288L800,224L960,32L1120,128L1280,32L1440,96L1440,0L1280,0L1120,0L960,0L800,0L640,0L480,0L320,0L160,0L0,0Z"></path>
    </svg>
    <div id="section-3" class="bg-white py-5">
      <b-container size="md" class="pt-5">
        <b-row class="justify-content-center">
          <div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 text-center">
            <h1 class="display-1 text-bebas-neue text-cornflower-blue text-decoration-underline">My Projects</h1>
          </div>
          <div class="col-12 pt-5">
            <h3 class="text-bebas-neue text-graphite-gray text-center">Content will be available very soon :)</h3>
          </div>
        </b-row>
      </b-container>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#6495ED" fill-opacity="1" d="M0,224L0,128L240,128L240,160L480,160L480,224L720,224L720,64L960,64L960,160L1200,160L1200,192L1440,192L1440,320L1200,320L1200,320L960,320L960,320L720,320L720,320L480,320L480,320L240,320L240,320L0,320L0,320Z"></path>
    </svg>
    <div id="section-4" class="bg-cornflower-blue vh-100">
      <b-container size="md" class="pt-5">
        <b-row class="justify-content-center">
          <div class="col-lg-4 col-xl-4 col-md-12 col-sm-12 text-center">
            <h1 class="display-1 text-bebas-neue text-white text-decoration-underline">Contact Me</h1>
          </div>
          <div class="col-12 pt-5">
            <h3 class="text-bebas-neue text-graphite-gray text-center">More content will be available very soon :)</h3>
            <h3 class="text-bebas-neue text-graphite-gray text-center">Until then, you can reach me at
              <span class="text-white text-decoration-underline hover-cursor">andrew.crossan23@outlook.com</span>
            </h3>

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
  },
  data() {
    return {
    };
  }
};
</script>