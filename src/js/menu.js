const {mainScreen} = require('./screens');
const {app} = require('electron');

const templateMenu = [
    {
        label: 'Archivo',
        submenu: [
            {
                label:'Salir',
                accelerator: 'Ctrl+Q',
                click(){
                    app.quit();
                }
            },
        ]
    },
]

if (process.env.NODE_ENV !=='production'){
    templateMenu.push(
        {
            label: 'Dev Tools',
            submenu: [
                {
                    label:'Show/Hide Dev Tools',
                    accelerator: 'Ctrl+D',
                    click(item, focusedWindow){
                        focusedWindow.toggleDevTools();
                    }
                },
                {
                    role:'reload'
                }
            ],
        }
    );   
}



module.exports = templateMenu;