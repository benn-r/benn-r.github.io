//
//                   /                                                            
//                    &  &.                                                       
//             &@@%%&&@@#/   &                                                   
//         (%##%%#&%%&@@@(&*  @                                                   
//      #%(%/@%&@@     &(@(&  &                                                   
//    @/%#@&/#%*/&%&%@%@@  &/&,                                                   
//    &(&#@%   /&((@(&#&@#&&(                                                     
//     #%        &%#####&&*                                                       
//               #(#/(&@&%@#                                                      
//                  %%%&@%&&                                                      
// &%&%#%%#          ,##%&@&.                                                     
//           &%&##(#@(&&/(&(/                                                     
//        &&/        /%#%%#%%#%*                                                  
//       .#       @##(%&%##%#(&&&&,.                                              
//             (%%#&%@##%(&&/    @&&%%,                                           
//           (%&%@&@ %/%&&&         .%&%(                                         
//         /%#&%     #@&@&              %&&##                                     
//        .#@       %(%&                   &&%&.                                  
//         *%&&&    &%#                       (%%(&                               
//           .%&&   (#(@                          %&&#                            
//             &&&    #%%&%&&                        &%%/#                        
//             .&@       /%%&&                         *#%%#                     
//                &@          &%&.                          &%%/,                 
//                 %%/           &&&%                          ,%&&&              
//               ##&&             .%%&                             &&&%           
//           (&&%                /@&                                  /%&%(     &(
//      @@&&@&                (&%(                                        &@@@@  
//                           %&%&.                                                

/**
 *  Logic for blue button / cat meow
 */

function soundMeow() {
  let meow = new Audio("./resources/cat-meow.wav");
  meow.play()
}

const blueButton = document.getElementById("blueButton");
blueButton.addEventListener("click", soundMeow);


/**
 *  Logic for red button
 */
function soundGun() {
  let gun = new Audio("./resources/pp7_fire1.wav");
  gun.play()
}

const redButton = document.getElementById("redButton");
redButton.addEventListener("click", soundGun);


/**
 *  Logic for green button
 */
function soundScream() {
  let scream = new Audio("./resources/wilhelm-scream.wav");
  scream.play()
}

const greenButton = document.getElementById("greenButton");
greenButton.addEventListener("click", soundScream);


/**
 *  Logic for yellow button
 */
function soundHorn() {
  let horn = new Audio("./resources/horn.wav");
  horn.play()
}

const yellowButton = document.getElementById("yellowButton")
yellowButton.addEventListener("click", soundHorn)