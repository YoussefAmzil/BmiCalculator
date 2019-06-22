<template>
	<div class="body">
		<div class="container forget-password">
            <div class="row">
                <div class="col-md-12 col-md-offset-4">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <div class="text-center">
                                <img src="../assets/bmi.png" alt="car-key" border="0">
                                <h2 class="text-center">Calculate your Body Mass Index</h2>
                                <p>Fill all informations!</p>
                                <form id="register-form" role="form" class="form" @submit="onSubmit">
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input id="forgetAnswer" v-model="age" placeholder="Age" class="form-control"  type="number" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input id="forgetAnswer" v-model="taille" placeholder="Height(cm)" class="form-control"  type="number" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="glyphicon glyphicon-envelope color-blue"></i></span>
                                            <input id="forgetAnswer" v-model="poids" placeholder="Weight(Kg)" class="form-control"  type="number" required>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <span class="input-group-addon"></span>
                                            male:<input id="forgetAnswer" v-model="gender"  class="form-control" value="male" type="radio">
                                            female:<input id="forgetAnswer" v-model="gender" class="form-control" value="female" type="radio" >
                                        </div>
                                    </div>
                                    
                                    <div class="form-group">
                                        <input  class="btn btn-lg btn-danger btn-block btnForget" value="Calculate" type="submit">
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>


</template>
<script >
	export default{
		name:'bmi',
		data(){
			return{
				age:'',
				poids:'',
				taille:'',
				gender:''
			}
		},
		methods:{
			onSubmit(e){
			e.preventDefault();
			var title='';
			var bmi=0;
			var color='';
			bmi=this.poids/((this.taille/100)*(this.taille/100))
			console.log(bmi)
			if(bmi<=15) {title='Very severely underweight';color='#00e3fc'}
			if(bmi>15 && bmi<=16) {title='Severely underweight';color='#00fcef'}
			if(bmi>16 && bmi<=18.5) {title='Underweight';color='##00fccd'}
			if(bmi>18.5 && bmi<=25) {title='Normal (healthy weight)';color='#00fc93' }
			if(bmi>25 && bmi<=30) {title='Overweight';color='#fce200'}
			if(bmi>30 && bmi<=35) {title='Moderately obese';color='#fcbd00'}
			if(bmi>35 && bmi<=40) {title='Severely obese';color='#fc6d00'}
			if(bmi>40) {title='Very severely obese';color='#fc3600'}
			console.log(title)
		  	this.$swal({
    	  	title: '<h3>BMI : ['+bmi.toFixed(2)+']</h3>',
    	  // showConfirmButton:true,
          // add a custom html tags by defining a html method.
           	html:'<div style="border:solid 1px '+color+';border-radius:3px;padding:15px;"><h2 style="color:'+color+'">'+title+'</h2></div>',
          	focusConfirm: true,
        })
			}
		}
	}
</script>

<style>
	.body{
    background:#14B3A4;
}
.forget-pwd > a{
    color: #dc3545;
    font-weight: 500;
}
.forget-password .panel-default{
    padding: 31%;
    margin-top: -30%;
}
.forget-password .panel-body{
    padding: 15%;
    margin-bottom: -50%;
    background: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
img{
    width:40%;
    margin-bottom:5%;
}
.btnForget{
    background: #C13628;
    border:none;
}
.forget-password .dropdown{
    width: 100%;
    border: 1px solid #ced4da;
    border-radius: .25rem;
}
.forget-password .dropdown button{
    width: 100%;
}
.forget-password .dropdown ul{
    width: 100%;
}
</style>