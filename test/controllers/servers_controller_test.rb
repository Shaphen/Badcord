require 'test_helper'

class ServersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get servers_index_url
    assert_response :success
  end

  test "should get create" do
    get servers_create_url
    assert_response :success
  end

  test "should get edit" do
    get servers_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get servers_destroy_url
    assert_response :success
  end

end
