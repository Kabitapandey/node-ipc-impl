const ipc =require( 'node-ipc').default;
 
    ipc.config.id   = 'process2';
    ipc.config.retry= 1500;
 
    ipc.connectTo(
        'process1',
        ()=>{
            ipc.of.process1.on(
                'connect',
                ()=>{

                    ipc.of.process1.emit(
                        'message', 
                        'process2'
                    )
                }
            );
            ipc.of.process1.on(
                'disconnect',
                ()=>{
                    ipc.log('disconnected from process1');
                }
            );
            ipc.of.process1.on(
                'message',  
                (data)=>{
                    console.log(data);
                }
            );
        }
    );