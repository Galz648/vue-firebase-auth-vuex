<template>
  <v-container>
                    <div class="text-xs-center">
                      <v-btn round color="red" dark :disabled="loading" :loading="loading" @click.prevent="onSigninGoogle">Login with Google
                        <v-icon right dark>lock_open</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                      </v-btn>
                    </div>

                    <div class="text-xs-center">
                      <v-btn round dark :disabled="loading" :loading="loading" @click.prevent="onSigninGithub">Login with Github
                        <v-icon right dark>lock_open</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                      </v-btn>
                    </div>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/profile')
        }
      }
    },
    methods: {
      onSignin () {
        this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
      },
      onSigninGoogle () {
        this.$store.dispatch('signUserInGoogle')
      },
      onSigninFacebook () {
        this.$store.dispatch('signUserInFacebook')
      },
      onSigninGithub () {
        this.$store.dispatch('signUserInGithub')
      },
      onSigninTwitter () {
        this.$store.dispatch('signUserInTwitter')
      },
      onResetPassword () {
        if (this.email === '') {
          return this.$store.dispatch('setError', {message: 'Email can not be blank'})
        }
        this.$store.dispatch('resetPasswordWithEmail', {email: this.email})
      },
      onDismissed () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
