const ipc =require( 'node-ipc').default;
ipc.config.id   = 'process1';
    ipc.config.retry= 1500;


    ipc.serve(()=>{
        ipc.server.on(
            'message',(data,socket)=>{
                ipc.server.emit(socket,'message','hello world') 
            }
        )

 
            ipc.server.on(
                'socket.disconnected',
                ()=> {
                    ipc.log('client has disconnected!');
                }
            );
        }
    );
 
    ipc.server.start();
 