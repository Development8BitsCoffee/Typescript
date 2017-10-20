import * as izitoast from 'iziToast';

/**
 * Load every config
 * 
 * @class Bootstraper
 */
class Bootstraper {

    private bootiziToast():void{ 
        iziToast.settings({
            message: "",
            timeout: 5000,
            resetOnHover: true,
            transitionIn: 'flipInX',
            transitionOut: 'flipOutX',
            position: "topCenter",
        });
    }

    public boot(): void { 
        this.bootiziToast(); 
        
    }

}

$(() => { 
    new Bootstraper().boot();
})