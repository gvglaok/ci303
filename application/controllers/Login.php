<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login extends CI_Controller {

	public function index()
	{
		$this->load->view('page-login', TRUE);
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
			echo "error!!!";
		}
	}

}

/* End of file Login.php */
/* Location: ./application/controllers/Login.php */