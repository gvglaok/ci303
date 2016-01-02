<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Loginmod extends CI_Model {

	public function login($name='',$key='')
	{
		$sql='SELECT * FROM `user` WHERE uname=? AND `key`=?';
		$query=$this->db->query($sql,Array($name,$key));
		return $query->num_rows();
	}

}

/* End of file Loginmod.php */
/* Location: ./application/models/Loginmod.php */