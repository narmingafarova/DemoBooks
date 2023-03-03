import React, { Component } from 'react'

export class Modal extends Component {
    render() {
        return (
            <div className="container demo">
                <div className="text-center">
                    <button type="button" className="btn btn-demo" data-toggle="modal" data-target="#myModal">
                        Left Sidebar Modal
                    </button>
                    <button type="button" className="btn btn-demo" data-toggle="modal" data-target="#myModal2">
                        Right Sidebar Modal
                    </button>
                </div>
                {/* Modal */}
                <div className="modal left fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="myModalLabel">Left Sidebar</h4>
                            </div>
                            <div className="modal-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </p>
                            </div>
                        </div>{/* modal-content */}
                    </div>{/* modal-dialog */}
                </div>{/* modal */}
                {/* Modal */}
                <div className="modal right fade" id="myModal2" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel2">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                <h4 className="modal-title" id="myModalLabel2">Right Sidebar</h4>
                            </div>
                            <div className="modal-body">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </p>
                            </div>
                        </div>{/* modal-content */}
                    </div>{/* modal-dialog */}
                </div>{/* modal */}
            </div>
        )
    }
}

export default Modal