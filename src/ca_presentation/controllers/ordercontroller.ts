// src/presentation/controllers/UserController.ts
import { Request, Response } from 'express';
import { OrderService } from '../../ca_application/services/order_services';
import { HttpStatusCode } from '../middleware/errorhandling/httpstatuscodes';
import { HttpStatusMessages} from '../middleware/errorhandling/httpstatusmessages';
import { BaseController } from './controllerbase';


export class OrderController extends BaseController {

  private orderServices: OrderService;

  constructor() {
    super();
    this.orderServices = new OrderService(); }
  
  async getAllOrders(req: Request, res: Response) 
  {
    try 
    {
      const order = await this.orderServices.getAllOrders();
      res.status(HttpStatusCode.OK).json(order);
    } catch (error)
    {
       this.handleError(error, this.constructor.name);
    }
  }

  async getOrderById(req: Request, res: Response) 
  {
    try 
    {
      const order = await this.orderServices.getOrderById(req.params.id);
      res.status(HttpStatusCode.OK).json(order);
    } 
    catch (error) 
    {
      this.handleError(error, this.constructor.name);
    }
  }

  async getOrderByCustomerId(req: Request, res: Response) 
  {
    try 
    {
      const order = await this.orderServices.getOrdersByCustomerId(req.params.id);
      res.status(HttpStatusCode.OK).json(order);
    } 
    catch (error) 
    {
      this.handleError(error, this.constructor.name);
    }
  }

  async createOrder(req: Request, res: Response) 
  {
    try 
    {
      const order = await this.orderServices.createOrder(req.body);
      res.status(HttpStatusCode.CREATED).json(order);
    } 
    catch (error) 
    {
      this.handleError(error, this.constructor.name);
    }
  }

  async updateOrder(req: Request, res: Response) 
  {
    try 
    {
      const order = await this.orderServices.updateOrder(req.params.id, req.body);
      res.status(HttpStatusCode.OK).json(order);
    } 
    catch (error) 
    {
      this.handleError(error, this.constructor.name);
    }
  }

  async deleteOrder(req: Request, res: Response) 
  {
    try 
    {
      await this.orderServices.deleteOrder(req.params.id);
      res.status(HttpStatusCode.DELETED).json(HttpStatusMessages[HttpStatusCode.DELETED]);
    } 
    catch (error) 
    {
      this.handleError(error, this.constructor.name);
    }
  }
}
