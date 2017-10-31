export class authenticationService {
	constructor(){
	}
	authentication:boolean = false;

	logIn(){
		this.authentication = true;
	}

	logOut(){
		this.authentication = false;
	}
	checkState():Promise<boolean> {
		console.log(this.authentication);
	    const promise = new Promise<boolean>(
	    	(resolve, reject) => 
	    		{
	    			resolve(this.authentication);
	    		});
	    return promise;
	}
}