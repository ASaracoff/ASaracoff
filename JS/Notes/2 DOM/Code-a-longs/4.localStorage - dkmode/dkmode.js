// retrieves toggle from html
const toggleSwitch = document.querySelector('input[type="checkbox"]')

// check is darkModeEnabled ? aka render page?
if (localStorage.getItem('darkModeEnabled')){
    // remembers last selected toggle
    document.body.className = 'dark';
    // change toggle to the correct setting/side
    toggleSwitch.checked = true;
}


/*
// attaches code to toggle
toggleSwitch.addEventListener('click', function(e){
    // make it a var {var} = deconstructed
    const {checked} = toggleSwitch;
    
    // is toggleSwitch checked? yes = 'dark', no = nothing ''
    document.body.className = checked ? 'dark': ''

    // uses localStorage to save settings
    localStorage.setItem('darkModeEnabled', checked)
}) */ 

// version 2
toggleSwitch.addEventListener('click', function(e){
    // make it a var {var} = deconstructed
    const {checked} = toggleSwitch;
    
    if(checked){
        localStorage.setItem('darkModeEnabled', true);
    }else{
        localStorage.removeItem('darkModeEnabled');
    }
    // is toggleSwitch checked? yes = 'dark', no = nothing ''
    document.body.className = checked ? 'dark': ''

    // uses localStorage to save settings
    
})  