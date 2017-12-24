<template>
  <div id="app">
  	<!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top" style="padding-bottom: 3px; padding-top: 3px;">
      <div class="container">
        <a class="navbar-brand" href="#" v-on:click.prevent="navigateTo('/')">Lucent News</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <button class="btn btn-link nav-link" v-on:click.prevent="navigateTo('/')">
                Home
              </button>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item" data-toggle="modal" data-target="#exampleModal">
              <a class="nav-link cd-signin" href="#">Sign in</a>
            </li>
            <li class="nav-item" data-toggle="modal" data-target="#exampleRegistration">
              <a class="nav-link cd-signup" href="#">Sign up</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <!-- Modal Login -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="container">
              <div class="form-group">
                <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-check">
                <label class="form-check-label" style="text-align: justify; display: inherit;">
                  <input type="checkbox" class="form-check-input">
                  Remember me
                </label>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Register -->
    <div class="modal fade" id="exampleRegistration" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Register</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form >
              
              <div class="form-group">
                <div class="row">
                  <div class="col-md-4">
                    <label for="title" class="control-label" style="text-align: justify; display: inherit;">
                        Title</label>
                    <div>
                      <select class="form-control">
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label for="first-name" class="control-label" style="text-align: justify; display: inherit;">
                      First name
                    </label>
                    <div>
                      <input type="email" class="form-control" id="Firstname" placeholder="Firstname" />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <label for="first-name" class="control-label" style="text-align: justify; display: inherit;">
                      Last name
                    </label>
                    <div>
                      <input type="email" class="form-control" id="Lastname" placeholder="Lastname" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-group">
                  <label for="username" class="control-label" style="text-align: justify; display: inherit;">
                      Username</label>
                  <div>
                      <input type="username" class="form-control" id="username" placeholder="Username" />
                  </div>
              </div>

              <div class="form-group">
                  <label for="email" class="control-label" style="text-align: justify; display: inherit;">
                      Email</label>
                  <div>
                      <input type="email" class="form-control" id="email" placeholder="Email" />
                  </div>
              </div>
              <div class="form-group">
                  <label for="password" class="control-label" style="text-align: justify; display: inherit;">
                      Password</label>
                  <div>
                      <input type="password" class="form-control" id="password" placeholder="Password" />
                  </div>
              </div>

              <div class="form-group">
                  <label for="confirm-password" class="control-label" style="text-align: justify; display: inherit;">
                      Confirm Password</label>
                  <div>
                      <input type="password" class="form-control" id="confirm-password" placeholder="Password" />
                  </div>
              </div>

              <div class="form-group">
                <label for="birthday" class="control-label" style="text-align: justify; display: inherit;">
                      Birthday</label>
                <div class="row">
                  <div class="col-md-4">
                    <select class="form-control">
                      <option>January</option>
                      <option>February</option>
                      <option>March</option>
                      <option>April</option>
                      <option>May</option>
                      <option>June</option>
                      <option>July</option>
                      <option>August</option>
                      <option>September</option>
                      <option>October</option>
                      <option>November</option>
                      <option>December</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="birthdate" placeholder="Day">
                  </div>
                  <div class="col-md-4">
                    <input type="text" class="form-control" id="year" placeholder="Year">
                  </div>
                </div>
              </div>

              <div class="form-group">
                  <label for="mobile" class="control-label" style="text-align: justify; display: inherit;">
                      Mobile</label>
                  <div>
                      <input type="email" class="form-control" id="mobile" placeholder="Mobile" />
                  </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    navigateTo: function (nav) {
      // Do what you want here.
      // this.saveTheThing()
      console.log(nav)
      this.$router.push({
          path: nav
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
},
.navbar{
  height: 20px;
},
.bg-dark{
  background-color: #877CB0;
},
.form-check-label{
  padding-left: 1.25rem;
  margin-bottom: 0;
  display: inherit;
  text-align: justify;
},
.btn-link{
  align-content: flex-start;
},
a.cd-signin, a.cd-signup {
    padding: .6em 1em;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 50em;
}
</style>
