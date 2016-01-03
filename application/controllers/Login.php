<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

	public function index()
	{
		$mes='';
		$data = array('mes' => $mes);
		$this->load->view('page-login',$data);
	}

	public function logining()
	{
		$name = $this->input->post('username',TRUE);
		$key = $this->input->post('pwd', TRUE);
		$this->load->model('Loginmod', 'lm');
		$res=$this->lm->login($name,$key);
		if($res>0)
		{
			echo "success!!!";
		} else {
			//echo "error!!!";
			$mes='<div class="alert alert-warning alert-dismissible" role="alert" >
					  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
					  <span aria-hidden="true">&times;</span>
					  </button>
					  <strong>Warning!</strong> Better check yourself, you not looking too good.
					</div>';
			$data = array('mes' => $mes);
			$this->load->view('page-login', $data);
		}
	}

}

/* End of file Login.php */
/* Location: ./application/controllers/Login.php */